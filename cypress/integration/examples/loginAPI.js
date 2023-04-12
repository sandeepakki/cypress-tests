import LoginPage from '../../pageObjects/LoginPage'

const loginPage = new LoginPage()
var value;
describe('Login API functional test', ()=> {
  it('batik api login test', ()=> {
    cy.request({
      method: 'POST',
      url: 'https://api-stg.tartanhq.com/marvel/api/v1/login',
      body: {loginKey:"legacy@mailinator.com",password:"San@300494",poolId:"ap-south-1_xH9pAN2Zu"}
    }).then(function(resp) {
      expect(resp.status).to.eq(200)
      expect(resp.body.user.employerId).to.eq('81585ae2-7a26-4488-b419-d83c0f05b58c')
      this.value = resp.body.accessToken
      console.log("Value " + this.value)
    })
  })

})