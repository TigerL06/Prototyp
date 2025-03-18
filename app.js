document.addEventListener('DOMContentLoaded', function() {
    // JSON-Daten für Neuigkeiten und Produkte (alternativ kann dies auch aus einer externen Datei geladen werden)
    const data = {
      news: [
        {
          id: "news1",
          title: "News 1: Website Launch",
          detail: "Detailinformationen zum Website Launch. Mehr Informationen hier..."
        },
        {
          id: "news2",
          title: "News 2: Neue Features",
          detail: "Detailinformationen zu den neuen Features. Weitere Details hier..."
        }
      ],
      products: [
        {
          name: "Produkt 1: Beispielprodukt",
          product: "Produkt 1"
        },
        {
          name: "Produkt 2: Beispielprodukt",
          product: "Produkt 2"
        }
      ]
    };
  
    // Dynamisches Erzeugen der Neuigkeiten
    const newsList = document.getElementById('newsList');
    data.news.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('news-item');
      
      // Erstelle den Link für den Titel
      const a = document.createElement('a');
      a.href = "#";
      a.classList.add('news-title');
      a.setAttribute('data-id', item.id);
      a.textContent = item.title;
      li.appendChild(a);
      
      // Erstelle das Detail-Div
      const detailDiv = document.createElement('div');
      detailDiv.classList.add('news-detail');
      detailDiv.id = "detail-" + item.id;
      detailDiv.style.display = 'none';
      const p = document.createElement('p');
      p.textContent = item.detail;
      detailDiv.appendChild(p);
      li.appendChild(detailDiv);
      
      newsList.appendChild(li);
    });
    
    // Dynamisches Erzeugen der Produkte
    const productsList = document.getElementById('productsList');
    data.products.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('product-item');
      
      // Erstelle den Produkt-Link
      const a = document.createElement('a');
      a.href = "#";
      a.classList.add('product-link');
      a.setAttribute('data-product', item.product);
      a.textContent = item.name;
      li.appendChild(a);
      
      productsList.appendChild(li);
    });
    
    // Event-Listener: Neuigkeiten – Detailbereich umschalten
    const newsTitles = document.querySelectorAll('.news-title');
    newsTitles.forEach(function(title) {
      title.addEventListener('click', function(event) {
        event.preventDefault();
        const id = title.getAttribute('data-id');
        const detailDiv = document.getElementById('detail-' + id);
        detailDiv.style.display = (detailDiv.style.display === 'block') ? 'none' : 'block';
      });
    });
    
    // Event-Listener: Produkte – Klick führt zur Produktdetailseite (simuliert)
    const productLinks = document.querySelectorAll('.product-link');
    productLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const product = link.getAttribute('data-product');
        loadProductPage(product);
      });
    });
    
    // E-Mail Formular: Simulierte Mail-Versendung
    const emailForm = document.getElementById('emailForm');
    emailForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('emailInput').value;
      sendEmail(email);
    });
    
    // Home-Button: Zurück zur Startseite (Neuladen des Prototyps)
    const btnHome = document.getElementById('btnHome');
    btnHome.addEventListener('click', function() {
      loadHomePage();
    });
  });
  
  // Funktion: Produktdetailseite laden
  function loadProductPage(product) {
    const mainContent = document.getElementById('mainContent');
    const productDetailHTML = `
      <section id="productDetail">
        <h2>Produkt Details: ${product}</h2>
        <p>Hier sind die Details für ${product}. Weitere Informationen und Spezifikationen könnten hier angezeigt werden.</p>
        <button id="backButton">Zurück</button>
      </section>
    `;
    mainContent.innerHTML = productDetailHTML;
  
    // Event für den Zurück-Button, um zur Startseite zu gelangen
    document.getElementById('backButton').addEventListener('click', loadHomePage);
  }
  
  // Funktion: Zurück zur Startseite laden
  function loadHomePage() {
    // In diesem Prototyp wird die Seite einfach neu geladen
    window.location.reload();
  }
  
  // Funktion: Simulierte E-Mail-Versendung
  function sendEmail(email) {
    const news = [];
    document.querySelectorAll('.news-title').forEach(function(item) {
      news.push(item.textContent);
    });
    
    const products = [];
    document.querySelectorAll('.product-link').forEach(function(item) {
      products.push(item.textContent);
    });
  
    console.log("Sende E-Mail an " + email);
    console.log("Enthaltene Neuigkeiten: " + news.join(", "));
    console.log("Enthaltene Produkte: " + products.join(", "));
  
    alert("Eine E-Mail wurde an " + email + " gesendet. (Simuliert)");
  }
  