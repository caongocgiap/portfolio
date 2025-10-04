export const emailjsConfig = {
  serviceId: 'service_hy15n7o',
  templateId: 'template_tstvql4',
  publicKey: 'Nzl_U1pojDBMTfaPu',
  toEmail: 'ngocgiap5204@gmail.com',
  defaultSubject: 'Form portfolio personal website'
};

export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
  subject: string;
}
