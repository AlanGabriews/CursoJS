function Calculator()
{
    this.display = document.querySelector(".display");
    ans = false;

    this.startCalculator = () => {
        btnClick() };

    btnClick = function()
    {
        document.getElementById("calculator").addEventListener("click", function(e)
        {
            element = e.target;

            if(ans)
            {
                ans = false;
                displayClr();
            }

            if (element.classList.contains("btn")) displayWrite(element.textContent);
            else if (element.classList.contains("del")) displayDel();
            else if (element.classList.contains("clr")) displayClr();
            else if (element.classList.contains("eql")) calculate();
        });
    }

    displayWrite = (value) => { this.display.value += value };
    displayDel = () => { this.display.value = this.display.value.slice(0, -1) };
    displayClr = () => { this.display.value = "" };
    calculate = () => {
        this.display.value = eval(this.display.value);
        ans = true;
    };
}

const calculator = new Calculator();
calculator.startCalculator();