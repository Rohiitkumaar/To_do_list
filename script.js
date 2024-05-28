src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      function getanupdate(){
        console.log("Updating....");
        tit=document.getElementById('title').value;
        desc=document.getElementById('description').value;
        if(localStorage.getItem('itemJson')==null){
          itemJsonArray=[];
          itemJsonArray.push([tit,desc]);
          localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
        }
        else{
          itemJsonArrayStr = localStorage.getItem('itemJson')
          itemJsonArray = JSON.parse(itemJsonArrayStr);
          itemJsonArray.push([tit,desc]);
          localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
        }
        update();

      }
      function update(){
        console.log("Updating....");
        tit=document.getElementById('title').value;
        desc=document.getElementById('description').value;
        if(localStorage.getItem('itemJson')==null){
          itemJsonArray=[];
          localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
        }
        else{
          itemJsonArrayStr = localStorage.getItem('itemJson')
          itemJsonArray = JSON.parse(itemJsonArrayStr);
        }

        //Populate the table
        let tablebody = document.getElementById("tablebody")
        let str = "";
        itemJsonArray.forEach((element,index) => {
          str+= `
          <tr>
              <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
        });
        tablebody.innerHTML = str;
      }
      let add=document.getElementById("add");
      add.addEventListener("click",getanupdate);

      update();
      function deleted(itemindex){
        console.log("Delete",itemindex)
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        //Delete index item from the list
        itemJsonArray.splice(itemindex,1)
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
        update();

      }
      function clearStorage(){
        console.log("Clearing the list");
        localStorage.clear();
        update();
      }