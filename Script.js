function addNewACField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('acfield');
    newNode.setAttribute('placeholder', 'enter here');

    let ac_ob = document.getElementById('ac_new');
    let acbtn_ob = document.getElementById('acbtn');

    ac_ob.insertBefore(newNode, acbtn_ob);
}

function addNewEXField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('wxfield');
    newNode.setAttribute('placeholder', 'enter work experience');

    let ex_ob = document.getElementById('ex_new');
    let exbtn_ob = document.getElementById('exbtn');

    ex_ob.insertBefore(newNode, exbtn_ob);
}

function addNewPROField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('profield');
    newNode.setAttribute('placeholder', 'Enter projects');

    let pro_ob = document.getElementById('pro_new');
    let probtn_ob = document.getElementById('probtn');

    pro_ob.insertBefore(newNode, probtn_ob);
}

function getResume(){
    let nameField = document.getElementById('nameField').value;
    let newName = document.getElementById('namet');
    newName.innerHTML = nameField;

    //phone number
    document.getElementById('phonet').innerHTML = document.getElementById('phonenumberField').value;
    document.getElementById('emailt').innerHTML = document.getElementById('emailField').value;
    
    
    
    let linkedin = document.getElementById('linkedint');
    linkedin.setAttribute('href',document.getElementById('linkdinField').value)
    

    
    
    
    
    
    document.getElementById('objt').innerHTML = document.getElementById('objField').value;
    document.getElementById('skillt').innerHTML = document.getElementById('skillField').value;

    let projects = document.getElementsByClassName('profield');

    let str = "";
    for(let i of projects){
        str = str + `<li> ${i.value} </li>`;
    }

    document.getElementById('prot').innerHTML = str;

    // work exp
    let exp = document.getElementsByClassName('wxfield');

    let str1 = "";
    for(let i of exp){
        str1 = str1 + `<li> ${i.value} </li>`;
    }

    document.getElementById('wet').innerHTML = str1;

    // education


    let ac = document.getElementsByClassName('acfield');

    let str2 = "";
    for(let i of ac){
        str2 = str2 + `<li> ${i.value} </li>`;
    }

    document.getElementById('act').innerHTML = str2;
    

    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('resume-template').style.display = 'block';
}

function resume_print(){
    document.getElementById('lastbtn').style.display = 'none';
    window.print();
}
