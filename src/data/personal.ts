export interface ExamEvent {
  course: string;
  start: string;
  end: string;
  venue: string;
  seat: string;
}

export const examEvents: ExamEvent[] = [
  {
    course: "Natural Language Processing",
    start: "2026-05-12T09:30:00+01:00",
    end: "2026-05-12T11:30:00+01:00",
    venue: "Physics Poynting Bridge",
    seat: "61"
  },
  {
    course: "Neural Computation",
    start: "2026-05-13T09:30:00+01:00",
    end: "2026-05-13T11:30:00+01:00",
    venue: "Sports Arena UoB Sports and Fitness",
    seat: "651"
  },
  {
    course: "Dependable and Distributed Systems",
    start: "2026-05-14T09:30:00+01:00",
    end: "2026-05-14T11:30:00+01:00",
    venue: "Old Gym LG09",
    seat: "85"
  },
  {
    course: "Advanced Networking",
    start: "2026-05-20T09:30:00+01:00",
    end: "2026-05-20T11:30:00+01:00",
    venue: "Sports Arena UoB Sports and Fitness",
    seat: "674"
  }
];
