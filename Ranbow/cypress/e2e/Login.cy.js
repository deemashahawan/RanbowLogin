import Login from "../PageObjects/LogInPage";
describe('Rainbow Website Login Test', ()=>{

    beforeEach(() => {
        cy.visit("https://web.openrainbow.net/rb/2.125.2/index.html#/login");
    });


    it('login with valid email and password', () => {
        cy.fixture('User.json').then((data) => {
        const ln=new Login();
        ln.setUserName(data.validUser.email);
        ln.clickButton1();
        ln.setPassword(data.validUser.password);
        ln.clickButton2();
        }); 
        
    });
    

})


  
    