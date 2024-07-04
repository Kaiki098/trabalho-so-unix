document.addEventListener('DOMContentLoaded', function() {
 
	document.getElementsByTagName('form')[0].onsubmit = function(evt) {
	  evt.preventDefault(); // Preventing the form from submitting
	  checkWord(); // Do your magic and check the entered word/sentence
	  window.scrollTo(0,150);
	}
   
	// Get the focus to the text input to enter a word right away.
	document.getElementById('terminalTextInput').focus();
   
	// Getting the text from the input
	let textInputValue = document.getElementById('terminalTextInput').value.trim();
   
	//Getting the text from the results div
	let textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;
   
	// Clear text input
	let clearInput = function(){
	  document.getElementById('terminalTextInput').value = "";
	}
   
	// Scrtoll to the bottom of the results div
	let scrollToBottomOfResults = function(){
	  let terminalResultsDiv = document.getElementById('terminalReslutsCont');
	  terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
	}
   
	// Scroll to the bottom of the results
	scrollToBottomOfResults();
   
	// Add text to the results div
	let addTextToResults = function(textToAdd){
	  document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
	  scrollToBottomOfResults();
	}
   
	// Getting the list of keywords for help & posting it to the screen
	let postHelpList = function(){
	  // Array of all the help keywords
	  let helpKeyWords = [
		"- 'pwd' will show the current directory",
		"- 'ls' will show all files in the directory",
		"- 'cat' + file will show a file content",
		"- 'tail' + file will show the last 10 words of a file ",
		"- 'wc' + file will show the word count of a file",
		"- 'Time' will display the current time.",
		"- 'Date' will display the current date.",
		"- 'moo' will display a funny cow",
		"- 'git-unix' will redirect to our github repository",
		"- 'authors' will will display the authors of this website"
	  ].join('<br>');
	  addTextToResults(helpKeyWords);
	}
   
	// Getting the time and date and post it depending on what you request for
	let getTimeAndDate = function(postTimeDay){
	  let timeAndDate = new Date();
	  let timeHours = timeAndDate.getHours();
	  let timeMinutes = timeAndDate.getMinutes();
	  let dateDay = timeAndDate.getDate();
	  console.log(dateDay);
	  let dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
	  let dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.
   
	  if (timeHours < 10){ // if 1 number display 0 before it.
		timeHours = "0" + timeHours;
	  }
   
	  if (timeMinutes < 10){ // if 1 number display 0 before it.
		timeMinutes = "0" + timeMinutes;
	  }
   
	  let currentTime = timeHours + ":" + timeMinutes;
	  let currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
   
	  if (postTimeDay == "time"){
		addTextToResults(currentTime);
	  }
	  if (postTimeDay == "date"){
		addTextToResults(currentDate);
	  }
	}
   
	// Opening links in a new window
	let openLinkInNewWindow = function(linkToOpen){
	  window.open(linkToOpen, '_blank');
	  clearInput();
	}
   
	// Having a specific text reply to specific strings
	let textReplies = function() {
	  switch(textInputValueLowerCase){
		// replies
		case "ls":
		  clearInput();
		  addTextToResults("Historia-1");
		  addTextToResults("Historia-2");
		  addTextToResults("HIstoria-3");
		  addTextToResults("HIstoria-4");
		  addTextToResults("Terminal");
		  addTextToResults("Lixeira");
		  break;

		case "moo":
		  clearInput();
		  addTextToResults(".(__)");
		  addTextToResults(".(oo)");
		  addTextToResults(".\xa0\\/------\\ ");
		  addTextToResults(".\xa0\xa0||\xa0\xa0\xa0||\xa0\\");
		  addTextToResults(".\xa0\xa0/\\\xa0\xa0\xa0/\\");
		  addTextToResults(".\xa0 ~~\xa0\xa0\xa0~~");
		  addTextToResults("...\"Have you mooed today?\"...");
		  break;
   
		case "cat surgimento":
		  clearInput();
		  addTextToResults("Até meados dos anos 40, computadores não armazenavam instruções na memória, elas eram executadas a partir de cartões perfurados, painéis de comutação ou instruções fixadas pela organização de cabos e interruptores. Com a proposta de arquitetura de von Neumann na metade da década, novas perspectivas de programação foram surgindo, permitindo conceitos como o de programa armazenado e a capacidade do computador executar instruções de software armazenadas na memória de acesso aleatório (RAM, do inglês random access memory");
		  addTextToResults("Com a popularização dos computadores de programa armazenado, o Massachusetts Institute of Technology (MIT), a American Telephone and Telegraph (AT&T) Bell Labs e General Eletric (GE) se reuniram para desenvolver um sistema operacional experimental, o MULTiplexed Information and Computing Services (MULTICS), para rodar em na máquina GE 645. Ele acabou não atraindo muitos consumidores, pela falta de recursos computacionais para atender ao que o software se propunha a fazer.");
		  break;

		  case "cat evolucao":
			clearInput();
			addTextToResults("Um novo projeto de sistema operacional foi elaborado por Thompson, Ritchie, McIlroy e Ossanna, o unics, escrito em asm e que visava oferecer ao usuário uma interface de linha de comando. Em 1969, o unics virou UNIX, mudança que marcou um período de grande colaboração entre Thompson e Ritchie, sendo o início do seu desenvolvimento para o PDP-7.");
			addTextToResults('A primeira versão do UNIX foi lançada em 1971, para a máquina PDP-11. Boa parte do UNIX foi reescrita em 1973, em C, pela possibilidade fornecida por ela para abstrações de alto nível em paralelo a operações em nível de bit, similar a um assembler; para além da portabilidade, que possibilitou o seu uso em outras máquinas.');
			addTextToResults('A distribuição gratuita do UNIX começou nas universidades em 1975, junto à criação de ferramentas para o rápido desenvolvimento de softwares por terceiros. Apenas três anos depois, em 1978, começou a ser distribuído o UNIX System V, uma versão comercial, com suporte técnico e manutenção.');
			break;
		
		case "cat declinio":
			clearInput();
			addTextToResults("A partir dos anos 80, outros projetos envolvendo o UNIX começaram a ser lançados, em paralelo ao original e ao System V. Já no início da década, a Universidade da Califórnia lançou o Berkeley Software Distribution (BSD), com a inclusão dos protocolos TCP/IP. A Microsoft também entrou no mercado com a sua versão, o Xenix, assim como a Apple, com a A/UX e o macOS. Também foi lançado, em 1984, o X window system, um sistema de janelas, que juntamente ao gerenciador de janelas Tab Window Manager (twm), proporcionou uma melhor experiência gráfica ao usuário UNIX e outros sistemas operacionais baseados nele.");
			addTextToResults('O que pode parecer um sucesso levou ao seu declínio nos anos 90, junto a outros fatores. O aumento da quantidade de sistemas UNIX-like levou à fragmentação do UNIX original e uma falta de padronização. As melhorias do BSD e o surgimento do Linux tornaram o projeto original uma opção menos atrativa, além da ascensão de sistemas proprietários, que dominaram o mercado de software. Esses novos SOs também contavam com suporte para as novas arquiteturas do mercado, como a x86, ao contrário do UNIX, que não conseguiu acompanhar a velocidade das mudanças do hardware.');
			addTextToResults('Não se pode negar, porém, a sua contribuição para os sistemas operacionais modernos: trouxe o conceito de shell, não apenas como linha de comando, mas como uma linguagem própria; criou a separação entre o espaço do usuário e do kernel, os sistemas e gerenciamento de arquivos; conceitos de ciclo de processos, além do versionamento e documentação.');
			break;
   
		case "git-unix":
		  clearInput();
		  addTextToResults('veja nosso codigo no github!!');
		  openLinkInNewWindow('https://github.com/Kaiki098/trabalho-so-unix');
		  break;
   
		case "tail surgimento":
		  clearInput();
		  addTextToResults("para atender ao que o software se propunha a fazer.");
		  break;

		case "tail evolucao":
		  clearInput();
		  addTextToResults("System V, uma versão comercial, com suporte técnico e manutenção.");
		  break;
		  
		case "tail declinio":
		  clearInput();
		  addTextToResults("conceitos de ciclo de processos, além do versionamento e documentação.");
		  break;
   
		case "wc surgimento":
		  clearInput();
		  addTextToResults("2 147 1003 tmp");
		  break;

		case "wc evolucao":
		  clearInput();
		  addTextToResults("3 162 958 tmp");
		  break;

		case "wc declinio":
		  clearInput();
		  addTextToResults("3 255 1522 tmp");
		  break;

		case "pwd":
		  clearInput();
		  addTextToResults("/u/ma/user");
		  break;

		case "authors":
		  clearInput();
		  addTextToResults("Kaiki Alvarenga");
		  addTextToResults("Helen Enes Dessa");
		  addTextToResults("Maria Clara Batista");
		  break;
   
   
   
		// replies 
   
		case "time":
		  clearInput();
		  getTimeAndDate("time");
		  break;
   
		case "date":
		  clearInput();
		  getTimeAndDate("date");
		  break;
   
		case "help":
		case "?":
		  clearInput();
		  postHelpList();
		  break;
   
		default:
		clearInput();
		addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
		break;
	  }
	}
   
  // Main function to check the entered text and assign it to the correct function
	let checkWord = function() {
	  textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a letiable
	  textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string
   
	  if (textInputValue != ""){ //checking if text was entered
		addTextToResults("<p class='userEnteredText'> " + "# " + textInputValue + "</p>");
		textReplies();
	  }
	};
   
  });