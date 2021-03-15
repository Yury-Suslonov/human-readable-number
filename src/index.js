module.exports = function toReadable (number) 
{
  number=String(number);
  let word="";
      for (let i=0;i<number.length;i++){
          if (number[i]==0 && number.length==1) word+="zero";
          if (i!=1 &&number[i]=="1") word+="one";
          if (i!=1 &&number[i]=="2") word+="two";
          if (i!=1 &&number[i]=="3") word+="three";
          if (i!=1 &&number[i]=="4") word+="four";
          if (i!=1 &&number[i]=="5") word+="five";
          if (number[i]=="6") word+="six";
          if (number[i]=="7") word+="seven";
          if (i!=1 &&number[i]=="8") word+="eight";
          if (number[i]=="9") word+="nine";
          if (number.length==3 && i==0 && number[i]!="0") word+=" hundred "
          if (((number.length==2&&i==0)||(number.length==3&&i==1)) && number[i]=="1") {
            if (number[2]=="0") return word+"ten";
            if (number[2]=="1") return word+"eleven";
            if (number[2]=="2") return word+"twelve";
            if (number[2]=="3") return word+"thirteen";
            if (number[2]=="4") return word+"fourteen";
            if (number[2]=="5") return word+"fifteen";
            if (number[2]=="6") return word+"sixteen";
            if (number[2]=="7") return word+"seventeen";
            if (number[2]=="8") return word+"eighteen";
            if (number[2]=="9") return word+"nineteen";
          }
          else
          if (((number.length==2&&i==0)||(number.length==3&&i==1)) && number[i]=="2") word+="twenty "
          else
          if (((number.length==2&&i==0)||(number.length==3&&i==1)) && number[i]=="3") word+="thirty "
          else
          if (((number.length==2&&i==0)||(number.length==3&&i==1)) && number[i]=="4") word+="forty "
          else
          if (((number.length==2&&i==0)||(number.length==3&&i==1)) && number[i]=="5") word+="fifty "
          else
          if (((number.length==2&&i==0)||(number.length==3&&i==1)) && number[i]=="8") word+="eighty "
          else
          if (((number.length==2&&i==0)||(number.length==3&&i==1)) && number[i]!="0") word+="ty "
      }
      return word.trim();
}
