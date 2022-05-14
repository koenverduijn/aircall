export const contactWebhookData = [
  {
    name: 'contact.created',
    body: {"resource":"contact","event":"contact.created","timestamp":1646393185,"token":"58ffd2bc5f3113f7bebf210a49299a1b","data":{"id":76041687,"direct_link":"https://api.aircall.io/v1/contacts/76041687","first_name":"Koen Test","last_name":"FuPPaYFelC","company_name":"SE Global Account","information":"","is_shared":true,"created_at":1646393184,"updated_at":1646393184,"emails":[{"id":139464607,"label":"Work","value":"koen.verduijn+t9pzmjebch@aircall.io"}],"phone_numbers":[]}}
  },
  {
    name: 'contact.deleted',
    body: {"resource":"contact","event":"contact.deleted","timestamp":1646393608,"token":"58ffd2bc5f3113f7bebf210a49299a1b","data":{"id":76041687,"direct_link":"https://api.aircall.io/v1/contacts/76041687","first_name":"Koen Test","last_name":"FuPPaYFelC","company_name":"SE Global Account","information":"","is_shared":true,"created_at":1646393184,"updated_at":1646393608,"emails":[],"phone_numbers":[]}}
  }
];

/* notes
- update contact only possible via API?
*/