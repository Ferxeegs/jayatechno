const FORM_SELECTOR = '#contact-form';
const STATUS_SELECTOR = '#contact-form-status';
const SUBMIT_SELECTOR = '#contact-form-submit';

type FormConfig = {
  endpoint: string;
  accessKey: string;
  subject: string;
  fromName: string;
};

function setStatus(
  el: HTMLElement,
  type: 'success' | 'error' | 'loading' | 'idle',
  message: string,
) {
  el.textContent = message;
  el.classList.remove('hidden', 'text-teal', 'text-red-600', 'text-body');

  if (type === 'idle') {
    el.classList.add('hidden');
    return;
  }

  el.classList.toggle('text-teal', type === 'success');
  el.classList.toggle('text-red-600', type === 'error');
  el.classList.toggle('text-body', type === 'loading');
}

function setSubmitting(button: HTMLButtonElement, submitting: boolean) {
  button.disabled = submitting;
  button.setAttribute('aria-busy', submitting ? 'true' : 'false');
  const label = button.dataset.labelDefault ?? button.textContent ?? 'Kirim';
  button.textContent = submitting
    ? (button.dataset.labelLoading ?? 'Mengirim...')
    : label;
}

function readConfig(form: HTMLFormElement): FormConfig | null {
  const { endpoint, accessKey, subject, fromName } = form.dataset;
  if (!endpoint || !accessKey || !subject || !fromName) return null;
  return { endpoint, accessKey, subject, fromName };
}

async function handleSubmit(event: SubmitEvent, form: HTMLFormElement) {
  event.preventDefault();

  const status = document.querySelector<HTMLElement>(STATUS_SELECTOR);
  const submitBtn = form.querySelector<HTMLButtonElement>(SUBMIT_SELECTOR);
  if (!status || !submitBtn) return;

  const config = readConfig(form);
  if (!config) {
    setStatus(
      status,
      'error',
      'Formulir belum dikonfigurasi. Hubungi kami melalui email yang tertera di halaman ini.',
    );
    return;
  }

  const botcheck = form.querySelector<HTMLInputElement>('input[name="botcheck"]');
  if (botcheck?.checked) return;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  setSubmitting(submitBtn, true);
  setStatus(status, 'loading', 'Sedang mengirim pesan Anda...');

  const payload = new FormData(form);
  payload.set('access_key', config.accessKey);
  payload.set('subject', config.subject);
  payload.set('from_name', config.fromName);

  try {
    const response = await fetch(config.endpoint, {
      method: 'POST',
      body: payload,
      headers: { Accept: 'application/json' },
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (response.ok && result.success) {
      setStatus(
        status,
        'success',
        'Terima kasih! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda segera.',
      );
      form.reset();
      status.focus();
      return;
    }

    setStatus(
      status,
      'error',
      result.message ??
        'Gagal mengirim pesan. Silakan coba lagi atau hubungi kami melalui email.',
    );
  } catch {
    setStatus(
      status,
      'error',
      'Koneksi bermasalah. Periksa jaringan Anda dan coba lagi.',
    );
  } finally {
    setSubmitting(submitBtn, false);
  }
}

function initContactForm() {
  const form = document.querySelector<HTMLFormElement>(FORM_SELECTOR);
  if (!form || form.dataset.bound === 'true') return;

  form.dataset.bound = 'true';
  form.addEventListener('submit', (event) => {
    void handleSubmit(event, form);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactForm);
} else {
  initContactForm();
}
