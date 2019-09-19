const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      contentTitle: "전체 부서 정기 회의1 ",
      content: "1111111"
    },
    "task-2": {
      id: "task-2",
      contentTitle: "전체 부서 정기 회의 2",
      content: "22222222"
    },
    "task-3": {
      id: "task-3",
      contentTitle: "전체 부서 정기 회의3 ",
      content: "33333333"
    },
    "task-4": {
      id: "task-4",
      contentTitle: "전체 부서 정기 회의 4",
      content: "44444444"
    },

    "task-5": {
      id: "task-5",
      contentTitle: "전체 부서 정기 회의8 ",
      content: "1111111"
    },
    "task-6": {
      id: "task-6",
      contentTitle: "전체 부서 정기 회의 3",
      content: "22222222"
    },
    "task-7": {
      id: "task-7",
      contentTitle: "전체 부서 정기 회의 2",
      content: "33333333"
    },
    "task-8": {
      id: "task-8",
      contentTitle: "전체 부서 정기 회의 ",
      content: "44444444"
    },

    "task-9": {
      id: "task-9",
      contentTitle: "명함 디자인 최종 시안 제출2  ",
      content: "1111111"
    },
    "task-10": {
      id: "task-10",
      contentTitle: "명함 디자인 최종 시안 제출 4",
      content: "22222222"
    },
    "task-11": {
      id: "task-11",
      contentTitle: "명함 디자인 최종 시안 제출2 ",
      content: "33333333"
    },
    "task-12": {
      id: "task-12",
      contentTitle: "명함 디자인 최종 시안 제출 ",
      content: "44444444"
    }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TODO",
      count: 2,
      isTodo: true,
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "DOING",
      count: 5,
      isTodo: false,
      taskIds: ["task-5", "task-6", "task-7", "task-8"]
    },
    "column-3": {
      id: "column-3",
      title: "DONE",
      count: 3,
      isTodo: false,
      // taskIds: ["task-9", "task-10", "task-11", "task-12"]
      taskIds: ["task-9"]
    }
  }
};

export default initialData;
