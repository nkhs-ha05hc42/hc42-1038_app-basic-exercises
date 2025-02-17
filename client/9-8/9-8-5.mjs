const deleteRecord = async (id) => {
    const fetchResult = await fetch(`http://localhost:3000/api/9-7/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetchResult.json();
    if (response.status !== "success") {
      throw new Error(response.status);
    }
    alert("削除が完了しました！");
  };
  

  const getTargetId = () => {
    const inputFormElement = document.getElementById("target-id-form").elements;
    const id = parseInt(inputFormElement.id.value);
    if (!id) {
      throw new Error("idが入力されていません");
    }
    return id;
  };
  
  
  const clearFormData = () => {
    const inputFormElement = document.getElementById("target-id-form").elements;
    inputFormElement.id.value = "";
  };
  
  
  window.onload = () => {
    
    const deleteButtonElement = document.getElementById("delete-button");
    deleteButtonElement.addEventListener(
      "click",
      async () => {
        try {
          const targetId = getTargetId();
          await deleteRecord(targetId);
          clearFormData();
        } catch (err) {
          alert(err);
        }
      },
      false
    );
  };
  