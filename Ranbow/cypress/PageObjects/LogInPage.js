class Login
{
    txtUserName='input[name="username"]';
    txtPassword='input[name="authPwd"]';
    txtButton1='button.blueFill.rbButtonComponent[aria-disabled="false"]';
    txtButton2='button.blueFill[aria-disabled="false"]';

    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }
    clickButton1(button){
        cy.get(this.txtButton1).click();
    }
    clickButton2(button){
        cy.get(this.txtButton2).click();
    }

}
export default Login;