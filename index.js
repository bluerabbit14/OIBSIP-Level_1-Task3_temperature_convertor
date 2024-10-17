function convert(){
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);

    var convertedValue;
    var resultUnit;

    switch(fromUnit)
    {
        case 'C':
            if(toUnit === 'F')
            {
                convertedValue = (temperature * 9/5) +32;
                resultUnit='℉';
            }
            else if(toUnit ==='K')
            {
                convertedValue = temperature + 273.15;
                resultUnit='K';
            }
            else
            {
                convertedValue = temperature;
                resultUnit='℃';
            }
            break;
        case 'F':
            if (toUnit === 'C')
            {
                convertedValue = (temperature -32) * 5/9;
                resultUnit = '℃';
            } 
            else if (toUnit === 'K')
            {
                convertedValue = (temperature -32) * 5/9 + 273.15;
                resultUnit = 'K';
            }
            else
            {
                convertedValue = temperature;
                resultUnit = 'F';
            }
            break;

        case 'K':
            if (toUnit === 'C')
            {
                convertedValue = temperature - 273.15;
                resultUnit = '℃';
            } 
            else if (toUnit === 'F')
            {
                convertedValue = (temperature - 273.15) * 9/5 +32;
                resultUnit = '℉';
            }
            else
            {
                convertedValue = temperature;
                resultUnit = 'K';
            }
            break;

    }
    document.getElementById('result').value =convertedValue.toFixed(2)+' '+resultUnit;
}