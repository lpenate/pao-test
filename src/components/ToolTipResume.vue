<template>
    <div class="container-tooltip">
        <div id="tooltip-body">
            <div id="closetooltip">X CERRAR</div>
            <section>
                <h2>El Clima</h2>
                <p>
                    El clima se define como el conjunto de condiciones atmosféricas
                    frecuentes en un lugar específico, y está compuesto por diversos
                    elementos: temperatura, precipitación, humedad, viento y presión, cada
                    uno de ellos medido con distintos instrumentos (termómetro,
                    pluviómetro, higrómetro, anemómetro y barómetro, respectivamente).
                </p>

                <h2>Tipos de Clima en España</h2>
                <p>
                    En cuanto a los tipos de clima en España, se destacan varias zonas
                    climáticas:
                </p>

                <ul>
                    <li>
                        <strong>Clima Continental:</strong> Abarca la mayor parte de la
                        península, con temperaturas extremas y precipitaciones abundantes en
                        otoño y primavera.
                    </li>
                    <li>
                        <strong>Clima Mediterráneo:</strong> Presente en las zonas costeras
                        del sur y este, con inviernos templados y veranos cálidos, y
                        precipitaciones irregulares.
                    </li>
                    <li>
                        <strong>Clima Continental-Mediterráneo:</strong> Encontrado en la
                        submeseta sur y parte de Andalucía, con temperaturas algo menos
                        extremas.
                    </li>
                    <li>
                        <strong>Clima Oceánico:</strong> Característico del norte, con
                        temperaturas frescas en invierno y suaves en verano, y
                        precipitaciones abundantes durante todo el año.
                    </li>
                    <li>
                        <strong>Clima de Montaña:</strong> En las zonas de alta montaña, con
                        temperaturas frías y precipitaciones en forma de nieve en invierno.
                    </li>
                    <li>
                        <strong>Clima Subtropical:</strong> Propio del archipiélago canario,
                        con temperaturas cálidas todo el año y precipitaciones escasas.
                    </li>
                </ul>

                <p>
                    La climatología es la ciencia que estudia el clima y sus variaciones,
                    utilizando herramientas como los climogramas para representar
                    gráficamente la evolución anual de las temperaturas y precipitaciones
                    en una región específica.
                </p>
            </section>
        </div>
    </div>
</template>

<style scoped>
#closetooltip {
    margin-top: 20px;
    margin-left: 20px;
    border: 1px solid white;
    color: white;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    width: 100px;
}

#closetooltip:hover {
    background-color: white;
    color: black;
}

li {
    margin: 1em;
}

li strong {
    text-decoration: underline;
    line-height: 1.25px;
    color: aqua;

}

#tooltip-body {
    padding: 40px 5px;
    width: 100%;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: black;
    border: 1px solid #d6d8d9;
    border-radius: 300px 15px 225px 15px/15px 225px 15px 255px;
}


.container-tooltip {

    padding: 20px;
    max-width: 800px;
    margin: auto;
}

h2 {
    margin-left: 1rem;
    color: #fefefe;
}

p {
    margin: 1em;
}
</style>
