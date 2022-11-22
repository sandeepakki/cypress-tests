import LoginPage from '../../pageObjects/LoginPage'

const loginPage = new LoginPage()
const accessToken='eyJraWQiOiJld2FzYzk5ZW40cStxQlpvRUNSNjhCYmhwNFpma3N2VWd5TzZvUW91aUFvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwOWQyZjUwYi1mYWIyLTRhOWUtOGM1OS1hY2E5NDczN2YwNjIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX3hIOXBBTjJadSIsImNsaWVudF9pZCI6InY5Z2Q4OGljbTdkbXBxa2ZkbjU4NjVmZGoiLCJvcmlnaW5fanRpIjoiZmYzYWVlNGYtZWMxZS00ZjEzLTgyYTItZTcyMTk1ZGE4NzRmIiwiZXZlbnRfaWQiOiIyZjQ3NDRhNC1kY2E3LTRmODEtOTFlZS01ZTRhODRlZjcxZTEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjY5MTExMDExLCJleHAiOjE2NjkxOTc0MTEsImlhdCI6MTY2OTExMTAxMSwianRpIjoiNTAyN2Q2N2YtMmEzOS00OTUwLTkxZGQtZmJjMmNmYWM3ODAxIiwidXNlcm5hbWUiOiJzYW5kZWVwKzE1anVuZUB0YXJ0YW5ocS5jb20ifQ.0O0cDIud5AmLBDJuACGOeDs1sqiT6GHWnE8hvsOfIQn7QUZOkkTanYtsNYf1UR9tYtKnFkZng-bvC8YN-g5v8ST6Vi6VkIihvodJ3B0foYidmEOlMBhFi9YRD0M8IIg1QJgPrGShJr-VwkWaRFlYR5LUtOPOhwcvT2qazk8Ydk_nYkz19AUocEFs8eSDOcHoBqnlzDLGlRTeM9yMM-Nx7wN982fOwCK-SKJ95lVNZ_hBkZj4rQvJq8_9eUSWgail4CWHrz-bQeKVjqy-Nmp-MG8ii826XOuWPJHMMVgHrs6yez1vyj8fYW-emFIMLjWTtxJRUdIJJra91ixfPszMAA'
describe('Login API functional test',function()
{
it('batik api login test',function(){
    cy.request({
        method: 'POST',
        url: 'https://api-stg.tartanhq.com/marvel/api/v1/employer/login', 
        body: {email:"sandeep+15june@tartanhq.com",password:"San@300494",poolId:"ap-south-1_xH9pAN2Zu"}
      }).then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body.user.employerId).to.eq('141abf99-3a2e-4b64-b491-13c3737440cb')
        console.log(resp.body.accessToken)
      })

})
it('get activated benefits count from api',function(){
  cy.request({
      method: 'POST',
      url: 'https://api-stg.tartanhq.com/marvel/api/v1/employer/home/activatedbenefits-count', 
      headers : {
        Authorization: 'Bearer '+accessToken
      },
      body: {"subcategories":["Medical Insurance","Personal Loan","Healthcare Plan","Wellness Consultation","Gadget Loan"]}
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body.result.totalCount).to.eq(25)
    })

})
})