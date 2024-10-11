let stack = [];
        const input = document.querySelector('input[type="text"]');
        const stackDivs = document.querySelectorAll('.stack div');

        function push() {
            if (stack.length < stackDivs.length) {
                const value = input.value.trim();
                if (value) {
                    stack.push(value);
                    updateStackDisplay();
                    input.value = '';
                }
            } else {
                alert("Stack is full!");
            }
        }

        function pop() {
            if (stack.length > 0) {
                stack.pop();
                updateStackDisplay();
            } else {
                alert("Stack is empty!");
            }
        }

        function updateStackDisplay() {
            stackDivs.forEach((div, index) => {
                if (index < stack.length) {
                    div.textContent = stack[index];
                } else {
                    div.textContent = '';
                }
            });
        }

        // Add event listeners to buttons
        document.querySelector('.buttons button:nth-child(1)').addEventListener('click', pop);
        document.querySelector('.buttons button:nth-child(2)').addEventListener('click', push);