describe('DB Configuration test', function() {

    it('Database connection test', function()  { 
        cy.task("queryDb","SELECT * FROM test.user_token order by id desc;").then(function(result){

            console.log(result[1][2])

        })
    })

})