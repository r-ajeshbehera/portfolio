"use client";
import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => { console.error(error); }, [error]);
  return <section className="section contact-page"><div className="container narrow center"><h1 className="h1-sm">This page could not load</h1><p className="lead">Try loading it again.</p><div className="actions center"><button type="button" className="btn btn-blue" onClick={reset}>Try again</button></div></div></section>;
}
