// Define list//

const org1_depts = [
    {
        name: "accounting",
        children: [
            {name: "accounting payable",children: []},
            {name: "accounting receivable",children: []
            }
        ]
    },
    {
        name: "finance",
        children: [],
    },
  ]
  
  const org2_depts = [
    {
        name: "accounting",
        children: [
            { name: "accounting payable",children: []},
            {
                name: "accounting receivable",
                children: [{ name: "cash", children: []},{ name: "check",children: [] }],
            },
        ],
    },
    {
        name: "finance",
        children:[{ name:"investment", children: [] }],
    },
  ]
  
  //Function part//
  
  function PrintDepts(depts, element){
  
    var len = depts.length;
    var ul = document.createElement("ul");
    ul.id = "mylist";
    var tt = document.getElementById("org1");
  
   
    for(var i = 0; i < len ; i++) {
      var li = document.createElement("li");
        
      li.innerText = (depts[i].name);
      ul.appendChild(li);
  
      PrintDepts(depts[i].children, li);
  
    }
  
    element.appendChild(ul);
  
  }
  
  //Get the output//
  
  PrintDepts(org1_depts, document.getElementById("org1"));
  
  
  PrintDepts(org2_depts, document.getElementById("org2"));
  
  // i am sorry professor i can not find the way to remove the bullets :( //