#include <stdio.h>
#include <stdlib.h>
#include <string.h>


char caesarCipher(char* sentence,int factor){
    for(int i=0;i<strlen(sentence);i++){
       //sentence=sentence+factor;
       //if(isspace(sentence[i]) || sentence[i]=='-' ){
       if(isspace(sentence[i]) || sentence[i]=='-' || sentence[i]=='_' || sentence[i]<65){
            sentence[i]=sentence[i];
            //printf("%c",sentence[i]);
       }
       else if(sentence[i]>96){
            if(sentence[i]+factor>122){
                //printf("%c",(char)96+(sentence[i]+factor)%122);
                sentence[i]=(char)96+((sentence[i]+factor)%122);
            }else{
                //printf("%c",sentence[i]+factor);
                sentence[i]=sentence[i]+factor;
            }
       }else{
           if(sentence[i]>64){
               if(sentence[i]+factor>90){
                    //printf("%c",(char)64+((sentence[i]+factor)%90));
                    sentence[i]=(char)96+(char)64+((sentence[i]+factor)%90);
                }else{
                    //printf("%c",sentence[i]+factor);
                    sentence[i]=sentence[i]+factor;
                }
           }
       }
    }
    //printf("\n");
    return sentence;
}

int main(){
    char str[] = "Hello_World!";
    //caesarCipher(str,4);
    //caesarCipher("middle-Outz",2);
    //caesarCipher("Hello_World!",4);
    printf("%c",caesarCipher(str,4));
    return 0;
}
