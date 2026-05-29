/** Web3Forms — https://web3forms.com */
export const contactForm = {
  endpoint: 'https://api.web3forms.com/submit',
  subject: 'Konsultasi Website — Jaya Techno',
  fromName: 'Jaya Techno Website',
} as const;

export function getWeb3FormsAccessKey(): string {
  return import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? '';
}
