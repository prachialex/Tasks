//let output="";
function greet(userType,firstName,lastName="")
{
    switch(userType)
{
	case 1: output="Thank you " + firstName+""+lastName+ " for your validation";
	break;
	case 2: output="Thank you " + firstName+""+lastName+ " for keeping the network secure";
	break;
	case 3: output="Thank you " + firstName+""+lastName+ " for using the platform";
	break;
	default: output="Enter valid input ";
    break;
}
//console.log(output);
return output;
}
greet(1,"Prachi");