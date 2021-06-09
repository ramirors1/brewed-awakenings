import { getEmployees, getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            const orders = getOrders()
            let employeeOrders = []

            employeeOrders = orders.filter(order => {
                            if (order.employeeId === parseInt(employeeId)) {
                                return true
                            }
                        }
                    )

                    window.alert(` ${clickEvent.target.innerText} sold ${employeeOrders.length} products `)
                }
            }
)


const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

