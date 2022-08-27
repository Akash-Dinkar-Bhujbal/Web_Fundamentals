var inputLabel = document.getElementById('inputLabel');
function pushBtn(obj)
{
    var pushed = obj.innerHTML;

    
    if (inputLabel.innerHTML== "1+" && pushed == '=')
    {
        inputLabel.innerHTML = "NEVER SETTLE";
    }
    else if (inputLabel.innerHTML == "NEVER SETTLE"&& pushed)
    {
        inputLabel.innerHTML = pushed;
    }else if (pushed == '=')
    {
        //calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    }
    else if (pushed =='AC')
    {
        //All Clear
        inputLabel.innerHTML ='0';
    }
    else
    {
        if(inputLabel.innerHTML == '0')
        {
            inputLabel.innerHTML = pushed;
        }
        else
        {
            inputLabel.innerHTML = inputLabel.innerHTML+ pushed;
        }
    }
    
}