const createRecord = async (inputBody) => {
    const fetchResult = await fetch("http://localhost:3000/api/9-7", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputBody),
    });
    const response = await fetchResult.json();
    if (response.status !== "success") {
      throw new Error(response.status);
    }
    alert("登録が完了しました！");
  };
  
  const getFormData = () => {
    const inputFormElement = document.getElementById("input-form").elements;
    const id = inputFormElement.id.value;
    const user_id = inputFormElement.user_id.value;
    const year = parseInt(inputFormElement.year.value);
    const month = parseInt(inputFormElement.month.value);
    const day = parseInt(inputFormElement.day.value);
    const name = inputFormElement.name.value;
    const score = parseInt(inputFormElement.score.value);
  
    if (!id || !user_id || !year || !month || !day || !name || !score) {
      throw new Error("すべての項目を入力してください");
    }
  
    return {
      id,
      user_id,
      year,
      month,
      day,
      name,
      score,
    };
  };
  
  const clearFormData = () => {
    const inputFormElement = document.getElementById("input-form").elements;
    inputFormElement.id.value = "";
    inputFormElement.user_id.value = "";
    inputFormElement.year.value = "";
    inputFormElement.month.value = "";
    inputFormElement.day.value = "";
    inputFormElement.name.value = "";
    inputFormElement.score.value = "";
  };
  
  window.onload = () => {
    const createButtonElement = document.getElementById("create-button");
    createButtonElement.addEventListener(
      "click",
      async () => {
        try {
          const inputBody = getFormData();
          await createRecord(inputBody);
          clearFormData();
        } catch (err) {
          alert(err);
        }
      },
      false
    );
  };
  