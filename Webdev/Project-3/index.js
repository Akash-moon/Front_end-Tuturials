console.log("JS Running ....")
// chahtha hun ki cross na dikghe 
document.querySelector('.cross').style.display = 'none';
// hum chahthe hain ki sidebargo toogle ho jaee ,matlab hai j chali jaee nhi hai toh aa ja
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        // jo hamari sidebar naam ki class hai uski class mei sidebargo contain karti hai kya nhi
        document.querySelector('.ham').style.display = 'inline';//ham ko dikhaoo
        document.querySelector('.cross').style.display = 'none';//ross ko nhi
    }
    else{
        document.querySelector('.ham').style.display = 'none';//ham ko mat dikhaoo
        document.querySelector('.cross').style.display = 'inline';//ross ko dikhaoo
    }

})