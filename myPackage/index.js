module.exports    =function validateEmail(email)  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))//check email with the regular expression
    {
        return true;
    }
     
        return false;
  };

