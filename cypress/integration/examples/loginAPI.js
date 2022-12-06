import LoginPage from '../../pageObjects/LoginPage'

const loginPage = new LoginPage()
var value;
describe('Login API functional test', ()=> {
  it('batik api login test', ()=> {
    cy.request({
      method: 'POST',
      url: 'https://api-stg.tartanhq.com/marvel/api/v1/employer/login',
      body: { email: "sandeep+15june@tartanhq.com", password: "San@300494", poolId: "ap-south-1_xH9pAN2Zu" }
    }).then(function(resp) {
      expect(resp.status).to.eq(200)
      expect(resp.body.user.employerId).to.eq('141abf99-3a2e-4b64-b491-13c3737440cb')
      this.value = resp.body.accessToken
      console.log("Value " + this.value)
    })
  })

    it('Second test case', function() {
  var authHeader = 'Bearer ' + this.value 
  const options = {
    method: 'POST',
    url: 'https://api-stg.tartanhq.com/marvel/api/v1/employer/home/activatedbenefits-count',
    body:{"subcategories":["Medical Insurance","Personal Loan","Healthcare Plan","Wellness Consultation","Gadget Loan"]},
    headers: {
      authorization: authHeader
    }
  }
  cy.request(options).then((resp) => {
    expect(resp.status).to.eq(200)
    expect(resp.body.result.totalCount).to.eq(28)
  })
})
})