describe('DB Configuration test', function() {

    it('query to fetch user tokens that are not used', function()  { 
        // cy.task("queryDb","SELECT * FROM test.user_token where status='NOT_USED';").then(function(result){

        //     console.log(result)

        // })
        console.log("SELECT * FROM test.user_token where status='NOT_USED';")
    })
    it('Query to fetch order detail with invoice no:', function()  { 
        // cy.task("queryDb","SELECT * FROM test.orders where employee_id='sandeep@tartanhq.com' and order_status='Order Completed' and invoice_id=282;").then(function(result){

        //     console.log(result)

        // })
        console.log("SELECT * FROM test.orders where employee_id='sandeep@tartanhq.com' and order_status='Order Completed' and invoice_id=282;")
    })
})