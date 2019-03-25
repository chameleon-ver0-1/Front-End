const initialData = {
  tasks: {
    "task-1": { id: "task-1", contentTitle: "hi", content: "1111111" },
    "task-2": { id: "task-2", contentTitle: "hi2", content: "22222222" },
    "task-3": { id: "task-3", contentTitle: "hi3", content: "33333333" },
    "task-4": { id: "task-4", contentTitle: "hi4", content: "44444444" },

    "task-5": { id: "task-5", contentTitle: "hello", content: "1111111" },
    "task-6": { id: "task-6", contentTitle: "hello2", content: "22222222" },
    "task-7": { id: "task-7", contentTitle: "hello3", content: "33333333" },
    "task-8": { id: "task-8", contentTitle: "hello4", content: "44444444" },

    "task-9": { id: "task-9", contentTitle: "bye", content: "1111111" },
    "task-10": { id: "task-10", contentTitle: "bye2", content: "22222222" },
    "task-11": { id: "task-11", contentTitle: "bye3", content: "33333333" },
    "task-12": { id: "task-12", contentTitle: "bye4", content: "44444444" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TODO",
      count: 2,
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "DOING",
      count: 5,
      taskIds: ["task-5", "task-6", "task-7", "task-8"]
    },
    "column-3": {
      id: "column-3",
      title: "DONE",
      count: 3,
      // taskIds: ["task-9", "task-10", "task-11", "task-12"]
      taskIds: ["task-9"]
    }
  }
};

export default initialData;
