import { convert } from "./convert";

test("暴力求解", () => {
  expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  expect(convert("PAYPALISHIRING", 6)).toBe("PRAIIYHNPSGAIL");
  expect(convert("A", 1)).toBe("A");
});

test("很长字符串", () => {
  expect(
    convert(
      "FHAFHUEAFDHAFUHAUEFHUALFHAUHFAEHFUHDAOIHFIAHFUWEHMIAWLFHHFJASKGFAGSFJHAGKJAGFKHJAGFJSGUEILQEGDJHAAHKIEHAFOBAFOWHFAOEFHFFUUHFFAFFHWHSAJKFASIGAIFFFHFUADAUAEHAFAHAHUDOHIHUEMALHFAKFGFHGJGKJGJGELEDHAKEAOAOHAEAEHHFLUEHIAWIFJGSAAHFUQJHHBWOHKLAFGALLGFGFAJGFAUYFGAFKGAYFRYSGFUISKGUIASEGGFEUWYKEJHGUYYFYAFAIEOWOEYYOOAPDHALODGDFGSGZVNVCUDGUYSGDAIDYUIADAITEYURYFRASG",
      3
    )
  ).toBe(
    "FHFFUUHFFAFFHWHSAJKFASIGAIFFFFUFHAAAFAAFHHEHFGJEHAHELIFAUHHFLFFFKFGSIGUEUYIOODOFZCUDYDEYSHFUADAUAEHAFAHAHUDOHIHUEMALHFAKFGFHGJGKJGJGELEDHAKEAOAOHAEHFUFAFWSJFSGIFHUDUEAAAUOIUMLFKGHJKGGLDAEOOAAHFUHAIJSAFQHBOKAGLGGAGAYGFGYRSFIKUAEGEWKJGYFAAEWEYOPHLDDGGVVUGYGADUAATYRFAGAEHHFLUEHIAWIFJGSAAHFUQJHHBWOFHFHKIFFAHHDHAAFGJEKAEHEWGHJWLAFJUAAYUGSFYHYFOYAAGSNDSIIIUR"
  );
});
