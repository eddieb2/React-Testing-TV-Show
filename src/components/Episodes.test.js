import React from "react";
import { render, queryAllByTestId } from "@testing-library/react";
import Episodes from "./Episodes";

// SECTION MOCK DATA - from res.data._embedded.episodes
const mockEpisodesData = [
  {
    id: 553946,
    url:
      "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
    },
    summary:
      "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/553946"
      }
    }
  },
  {
    id: 578663,
    url:
      "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
    name: "Chapter Two: The Weirdo on Maple Street",
    season: 1,
    number: 2,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
    }
  }
];

// SECTION TESTS
test("RENDERS WITHOUT ERRORS", () => {
  // NOTE Check if the component is rendering
  render(<Episodes episodes={[]} error="" />);

  //ANCHOR TEST PASSES
});

test("EPISODES RENDERS THE LIST OF EPISODES", () => {
  // NOTE Renders Episodes component properly
  const { queryAllByTestId, rerender } = render(
    <Episodes episodes={[]} />
  );
  // NOTE Expect nothing to be displayed because the array is empty
  expect(queryAllByTestId(/episode-list/i)).toHaveLength(0);
  // NOTE Rerender with a mock array
  rerender(<Episodes episodes={mockEpisodesData} />);
  // NOTE Expect the mock arry to display two items
  expect(queryAllByTestId(/episode-list/i)).toHaveLength(2);

  //ANCHOR TEST PASSES
});
