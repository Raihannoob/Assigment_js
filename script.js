var guestNumber = 0;

function GuestInfo_increment() {
  guestNumber++;
  document.getElementById("GuestInfo").innerHTML = guestNumber;
}

function GuestInfo_decrement() {
  if (guestNumber > 0) {
    guestNumber--;
    document.getElementById("GuestInfo").innerHTML = guestNumber;
  }
}

function GuestInfo_update() {
  var guest = document.getElementById("GuestInfo").innerText;
  document.getElementById("gid").innerHTML = guest;
  document.getElementById("showguest").innerHTML = guest;
 
}

function udateprice(){
  document.getElementById("pid").innerHTML = document.getElementById("slider-1").value + "-"+ document.getElementById("slider-2").value;
}

// search 
  
      const data = [
        { "id": 503358, "Name": "Province of Ragusa, Sicily, Italy", "Count": 51, "SlashName": "italy\/sicily\/province-of-ragusa-vacation-rentals\/g100503358" },
        { "id": 416298, "Name": "Jerusalem, Jerusalem District, Israel", "Count": 4, "SlashName": "Israel\/Jerusalem-vacation-rentals\/g2579\/" },
        { "id": 407700, "Name": "Jerusalem District, Israel", "Count": 4, "SlashName": "israel\/jerusalem-district-vacation-rentals\/g100407700" },
        { "id": 686343, "Name": "Marausa, Trapani, Italy", "Count": 2, "SlashName": "sicily\/province-of-trapani\/trapani\/marausa-vacation-rentals\/g100686343" },
        { "id": 414003, "Name": "Husafell, West Region, Iceland", "Count": 2, "SlashName": "iceland\/west-region\/husafell-vacation-rentals\/g100414003" },
        { "id": 414006, "Name": "Husavik, Northeast Region, Iceland", "Count": 2, "SlashName": "iceland\/northeast-region\/husavik-vacation-rentals\/g100414006" },
        { "id": 574074, "Name": "Llanddeusant, Anglesey, United Kingdom", "Count": 1, "SlashName": "wales\/north-wales\/anglesey\/llanddeusant-vacation-rentals\/g100574074" }
      ];


      let areas = [];

     
      const jsonObject = JSON.stringify(data);
        const jsObject = JSON.parse(jsonObject);
        for (x in jsObject) {
          areas.push(jsObject[x].Name);
        }
        
      let sortedData = areas.sort();
      let input = document.getElementById("location");
      function Suggestion(str) {
        removeElements();
        for (let i of sortedData) {
          if (i.toLowerCase().startsWith(str.toLowerCase()) && str != "") {
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            let word = "<b>" + i.substr(0, str.length) + "</b>";
            word += i.substr(str.length);
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
          }
        }
      };
      function displayNames(value) {
        input.value = value;
        removeElements();
      }
      function removeElements() {
        let items = document.querySelectorAll(".list-items");
        items.forEach((item) => {
          item.remove();
        });
      }

      function check_length() {
        let str = document.getElementById("location").value;
        console.log(str.length);
        if (str.length + 1 >= 3) {
          Suggestion(str);
        }
      }

