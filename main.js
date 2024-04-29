const quizData = [
    { question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "Paris", "Madrid", "Berlin"],
        answer: "Paris",
        color: "#fff"
    },

    {   question: "Cual es el rio mas largo del mundo",
        options: ["Amazonas", "Nilo", "Yamgtse", "Misisipi"],
        answer: "Amazonas",
        color: "#fff"
    }
];

//obtenemos referencias a los elementos del dom que queremos manipular
const quizContainer = document.getElementById('quiz-container');
const question = document.getElementById('question');
const options = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');


//inicializamos variables para controlar el progreso del quiz y el puntaje
let currentQuestionIndex = 0;
let score = 0;

// Cambiamos el nombre de la variable options a optionsElement para evitar conflictos
function showQuestion() {
    // Obtenemos la pregunta actual del array quizData
    const currentQuestion = quizData[currentQuestionIndex];
    // Mostramos la pregunta en el elemento HTML con id 'question'
    question.textContent = currentQuestion.question;
    //aplicamos color al texto
    question.style.color = currentQuestion.color;

    // Limpiamos el contenedor de opciones
    options.innerHTML = '';
    // Iteramos sobre las opciones de la pregunta actual
    currentQuestion.options.forEach(option => {
        // Creamos un elemento div para cada opción
        const optionElement = document.createElement('div');
        // Le añadimos la clase 'option' para aplicar estilos CSS
        optionElement.classList.add('option');
        // Establecemos el texto de la opción
        optionElement.textContent = option;
        // Añadimos un evento de click para verificar la respuesta seleccionada
        optionElement.addEventListener('click', () => checkAnswer(option));
        // Añadimos la opción al contenedor de opciones
        options.appendChild(optionElement);
    });
}


//esta funcion verifica si la opcion seleccionada es la respuesta correcta
function checkAnswer(selectedOption) {
    //obtenemos al respuesta correcta  de la preguta actual
    const correctAnswer = quizData[currentQuestionIndex].answer;
    //si la respuesta es correcta incrementamos el puntaje
    if(selectedOption === correctAnswer){
        score++
    }

    //pasamos a la sieguiente pregunta
    currentQuestionIndex++;
    //si hay mas preguntas, mostrame la siguiente pregunta; de lo contrario, mostrame los resultado sfinales
    if(currentQuestionIndex < quizData.length){
        showQuestion();
            
        }else{
            showResults();

            
        }
    }

    // Esta función muestra los resultados finales del quiz
    function showResults() {
        // Limpiamos el contenedor del quiz
        quizContainer.innerHTML = `
            <h2 class="color-text">Quiz Finished!</h2>
            <p class="color-text">Your score: ${score} out of ${quizData.length}</p>
        `;
    }
    
    //evento clicl del boton de submit para llamar a la funcion submitQuiz()

    submitButton.addEventListener('click',submitQuiz);

    //funcion para enviar el quiz
    function submitQuiz() {
        //mostrar los resultados finales del quiz
        showQuestion();
    }