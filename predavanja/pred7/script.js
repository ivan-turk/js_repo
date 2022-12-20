const stvoriElement = (event) => {
  event.preventDefault();

  let podaci = dohvatiPodatkeNovogElementa();

  document.body.appendChild(stvoriNode(podaci));
};

const dohvatiPodatkeNovogElementa = () => {
  return { elem: document.getElementById("elem").value, elemSadrzaj: document.getElementById("elemSadrzaj").value };
};

const stvoriNode = (params) => {
  let noviElement = document.createElement(params.elem);
  noviElement.innerText = params.elemSadrzaj;
  return noviElement;
};

// Testiranje koda
