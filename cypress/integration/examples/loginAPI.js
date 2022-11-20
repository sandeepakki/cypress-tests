import LoginPage from '../../pageObjects/LoginPage'

const loginPage = new LoginPage()
const accessToken='eyJraWQiOiJld2FzYzk5ZW40cStxQlpvRUNSNjhCYmh'
+'wNFpma3N2VWd5TzZvUW91aUFvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwOWQyZjUwYi1mY'+
'WIyLTRhOWUtOGM1OS1hY2E5NDczN2YwNjIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHA'+
'uYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX3hIOXBBTjJadSIsImNsaWVudF'+
'9pZCI6InY5Z2Q4OGljbTdkbXBxa2ZkbjU4NjVmZGoiLCJvcmlnaW5fanRpIjoiZDQzOGFhOGEtNTQ'+
'1Ny00MGZkLWE1NmItM2UwOTY2NDYyY2NhIiwiZXZlbnRfaWQiOiI4MGZhZWMzZC1hZDJmLTRhNzQtY'+
'jA3NS01NmRjNjc2NWYzMzAiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLn'+
'NpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjY4OTQ4ODAwLCJleHAiOjE2NjkwMzUyMDAsImlh'+
'dCI6MTY2ODk0ODgwMCwianRpIjoiNzllODFiZjQtOTlhYi00ZjlkLThjYTItZWQxN2MxZmEzZWE0IiwidXNl'+
'cm5hbWUiOiJzYW5kZWVwKzE1anVuZUB0YXJ0YW5ocS5jb20ifQ.aRcS82DnIU3TQ1Au-l5PFN_Dg8bnV9D8tPCqwGga'+
'I7gZddPsFqRMP1Mk3gxNwJkieH66j_wV-mhXYDQmXrYfOq9XqoXxOQ-UyMunnbnH0FVNuc1-DD4apfOJZMMJ77rSTQ_xXLI'+
'_DNfwx5Sf5IMuA9lsRjmy6dqnIn_HgO8OZ6DtTvOoagIoYVdHUPz-Zz7kpDow__t6P6sQhhJ0zhEyZXzI4A5Mcnlx7WDKJXMStg'+
'fo9XNMPt_Md-hpa_GNx5nGnYHmdh_drWlrr3LP-sEz3jUyri_MwgkfZ36sr7oqeKH0w8HTqIffnyBUfm5iyd7vjrgBOwCJuami7PlFIuDfiA'
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
it.only('get activated benefits count from api',function(){
  cy.request({
      method: 'POST',
      url: 'https://api-stg.tartanhq.com/marvel/api/v1/employer/home/activatedbenefits-count', 
      headers : {
        Authorization: 'Bearer '+accessToken
      },
      body: {"subcategories":["Medical Insurance","Personal Loan","Healthcare Plan","Wellness Consultation","Gadget Loan"]}
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body.result.totalCount).to.eq(23)
    })

})
})