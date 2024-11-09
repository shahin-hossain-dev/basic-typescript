{
  /**
   * ---------------------------->
   * Asynchronous typescript
   * ---------------------------->
   *
   */
  //Promise --------------------->

  //simulate
  type Something = {
    something: string;
  };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "Something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  const loadData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };

  loadData();

  //  get data with json placeholder
  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data: Promise<Todo> = await response.json();
    return data;
  };

  getTodo();

  //<-----------------------------
}
