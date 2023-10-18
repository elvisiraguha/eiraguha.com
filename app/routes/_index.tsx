import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Personal Website" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Under re-innovation...</h1>
      <h2>Check back again soon</h2>
    </div>
  );
}
