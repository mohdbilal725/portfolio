function sendMail(){
    var params ={
     name: document.getElementById("name").value,
     email:document.getElementById("email"),value,
     message:document.getElementById("message").value,


    };

const serviceID ="service_sxor7h8";
const templateId ="template_o0hnz05"

emailjs.send(serviceID,templateId,params)
.then(
    res=>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
    alert("your message sent successfully");
    }
)
.catch((err) => console.log(err));
}