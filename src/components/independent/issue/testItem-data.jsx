const initialData = {
  tasks: {
    "task-1": { id: "task-1", contentTitle: "hi", content: "1111111" },
    "task-2": { id: "task-2", contentTitle: "hi2", content: "22222222" },
    "task-3": { id: "task-3", contentTitle: "hi3", content: "33333333" },
    "task-4": { id: "task-4", contentTitle: "hi4", content: "44444444" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TODO",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "DOING",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-3": {
      id: "column-3",
      title: "DONE",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    }
  }
};

export default initialData;
