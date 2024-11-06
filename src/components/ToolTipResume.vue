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
                <h2>Factores climaticos</h2>ç
                <p>
                    Los factores climáticos son los elementos que influyen en el clima de una zona. Entre ellos se
                    encuentran:
                </p>
                <ul>
                    <li><strong>Latitud:</strong> Es la distancia de un punto de la Tierra respecto al ecuador. A menor
                        latitud (más cerca del ecuador), el clima es más cálido. A mayor latitud (más lejos del
                        ecuador), el clima es más frío.</li>
                    <li><strong>Altitud:</strong> La altitud es la altura sobre el nivel del mar. A mayor altitud, la
                        temperatura disminuye aproximadamente 1°C cada 100 metros.</li>
                    <li><strong>Influencia del mar:</strong> Las zonas cercanas al mar tienen un clima más suave, ya que
                        el agua del mar se calienta y enfría más lentamente que la tierra, lo que regula la temperatura
                        y afecta la humedad y el viento.</li>
                    <li><strong>Relieve:</strong> Las montañas y otras formaciones geográficas influyen en el clima. Las
                        montañas, por ejemplo, pueden frenar el paso de los vientos y las nubes, afectando el clima en
                        áreas cercanas.</li>
                </ul>
                <h2>El Paisaje</h2>
                <p>
                    El paisaje es una área de la superficie terrestre que resulta de la interacción de varios factores
                    como el clima, flora, fauna y relieve. En España, diversos factores climáticos y naturales
                    configuran diferentes tipos de paisajes, cada uno caracterizado por sus condiciones climáticas y
                    vegetación distintiva.
                </p>
                <p>
                    <strong>Paisaje de transición:</strong> Común en zonas de clima continental y
                    mediterráneo-continental, con árboles de hoja caduca y perenne adaptados a sequías estivales.
                </p>
                <p>
                    <strong>Paisaje oceánico:</strong> Ubicado en zonas de clima oceánico, como el norte de España,
                    conocido por su vegetación abundante debido a las frecuentes precipitaciones. Los árboles son altos
                    y de hoja caduca.
                </p>
                <p>
                    <strong>Paisaje de montaña:</strong> Se extiende desde el límite superior de un bosque hasta la cima
                    de las montañas. La vegetación es escasa, con musgos y pequeños matorrales debido a las bajas
                    temperaturas y condiciones extremas.
                </p>
                <p>
                    <strong>Paisaje mediterráneo:</strong> Encontrado en zonas de clima mediterráneo, con vegetación de
                    hoja perenne como pinos y encinas, adaptada a la escasez de lluvias y altas temperaturas.
                </p>
                <p>
                    <strong>Paisaje canario:</strong> Característico del archipiélago canario, influido por el clima
                    subtropical. Incluye bosques de laurisilva en zonas húmedas y plantas como el drago y la palmera
                    canaria en áreas áridas.
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
