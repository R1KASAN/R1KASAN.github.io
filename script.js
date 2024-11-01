// ฟังก์ชันคำนวณค่าใช้จ่ายและการออมเงิน
function calculateExpense() {
    // รับข้อมูลจากฟิลด์จำนวนเงินทั้งหมดและเป้าหมายการออม
    const totalMoneyInput = document.getElementById("totalMoney").value;
    const savingsGoalInput = document.getElementById("savingsGoal").value;
    const totalMoney = parseFloat(totalMoneyInput);
    const savingsGoal = parseFloat(savingsGoalInput);

    // ตรวจสอบความถูกต้องของข้อมูลที่ผู้ใช้กรอก
    if (isNaN(totalMoney) || totalMoney <= 0 || isNaN(savingsGoal) || savingsGoal < 0) {
        document.getElementById("result").innerHTML = "<div class='error'>กรุณาใส่จำนวนเงินให้ถูกต้อง</div>";
        return;
    }

    // คำนวณจำนวนเงินที่ต้องออมต่อเดือนและต่อสัปดาห์
    const monthlySavings = Math.round(savingsGoal / 12);
    const weeklySavings = Math.round(savingsGoal / 52); // ใช้ 52 สัปดาห์ในหนึ่งปี
    const spendingMoney = totalMoney - monthlySavings;

    // ตรวจสอบว่าเงินเพียงพอสำหรับการออมหรือไม่
    if (spendingMoney < 0) {
        document.getElementById("result").innerHTML = "<div class='error'>จำนวนเงินไม่เพียงพอสำหรับการออมที่ตั้งไว้ กรุณาปรับเป้าหมายการออม</div>";
        return;
    }

    // คำนวณค่าใช้จ่ายรายสัปดาห์และรายวัน
    const weeklyExpense = Math.round(spendingMoney / 4); // สมมุติว่าในหนึ่งเดือนมี 4 สัปดาห์
    const dailyExpense = Math.round(weeklyExpense / 7); // 7 วันในหนึ่งสัปดาห์

    // แสดงผลลัพธ์ให้ผู้ใช้เห็น พร้อมจัดรูปแบบตัวเลขให้มีเครื่องหมายคั่นหลัก
    document.getElementById("result").innerHTML =
        `คุณควรออมเงิน <b>${monthlySavings.toLocaleString()} บาท</b> ต่อเดือน<br>` +
        `หรือ <b>${weeklySavings.toLocaleString()} บาท</b> ต่อสัปดาห์ เพื่อให้ถึงเป้าหมายการออม<br>` +
        `และใช้เงินประมาณ <b>${weeklyExpense.toLocaleString()} บาท</b> ต่อสัปดาห์<br>` +
        `หรือ <b>${dailyExpense.toLocaleString()} บาท</b> ต่อวัน เพื่อให้เพียงพอตลอดทั้งเดือน`;
}

// ฟังก์ชันสำหรับรีเซ็ตฟิลด์และล้างผลลัพธ์
function resetFields() {
    document.getElementById("totalMoney").value = "";
    document.getElementById("savingsGoal").value = "";
    document.getElementById("result").innerText = "";
}