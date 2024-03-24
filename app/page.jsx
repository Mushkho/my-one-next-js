//import Image from "next/image";
import styles from "./page.module.css"
import { Button } from 'antd';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <h1 className="text-3xl font-bold">NextJS 14 Starter Kit</h1>
        <h3 className="info pl-3 mt-4">Additional sentence</h3>
        <p className={styles.local_css}>This is styled in a module.css file for page.js ***no hyphens may be used***</p>
        <Button type="primary" className="w-52 min-h-10 sm:min-w-80">Submit</Button>
        <br /><br />
        <Button type="primary" className="w-1/2 ">Submit</Button>
      </div>
    </main>
  );
}
