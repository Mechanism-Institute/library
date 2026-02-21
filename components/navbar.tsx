"use client";
import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import X from "@/components/ui/x";
import Mail from "@/components/ui/mail";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activePage = usePathname();
  const isHome = activePage === "/";
  const activeClasses =
    "underline underline-offset-[49px] decoration-4 decoration-gray-900 text-gray-900";
  return (
    <nav className="flex items-center justify-between w-full px-2 py-8 border-b border-divider">
      <Link href="/" className="transition-opacity duration-300 cursor-pointer hover:opacity-70">
        <Image
          src={isHome ? "/logomark.svg" : "/logo.svg"}
          alt="logo"
          width={isHome ? 37 : 151}
          height={40}
        />
      </Link>
      <div className="hidden gap-10 md:flex items-center">
        <Typography
          className={clsx(activePage === "/about" && activeClasses)}
          variant="nav-link"
          asChild
        >
          <Link href="/about">About</Link>
        </Typography>
        <Typography
          className={clsx(activePage === "/library" && activeClasses)}
          variant="nav-link"
          asChild
        >
          <Link href="/library">Library</Link>
        </Typography>
        <Link
          href="mailto:hello@mechanism.institute"
          className="ml-2 transition-opacity duration-300 hover:opacity-70 text-gray-600"
        >
          <Mail width={18} height={18} />
        </Link>
        <Link
          href="https://x.com/mechanism_inst"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-300 hover:opacity-70 text-gray-600"
        >
          <X width={16} height={16} />
        </Link>
      </div>
      <div className="md:hidden">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="button">
            <Menu className="text-gray-600" />
          </Dialog.Trigger>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-black bg-opacity-50" />
          <Transition
            as={Dialog.Content}
            aria-label="Menu"
            className="fixed top-0 right-0 z-50 flex flex-col h-screen p-6 space-y-4 bg-gray-200 shadow-xl"
            show={open}
            enter="transition-all transform ease-out duration-300"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all transform ease-in duration-300"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <Typography variant="nav-link" asChild>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </Typography>
            <Typography variant="nav-link" asChild>
              <Link href="/library" onClick={() => setOpen(false)}>
                Library
              </Link>
            </Typography>
            <Link
              href="mailto:hello@mechanism.institute"
              className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-70 text-gray-600"
              onClick={() => setOpen(false)}
            >
              <Mail width={18} height={18} />
            </Link>
            <Link
              href="https://x.com/mechanism_inst"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-70 text-gray-600"
              onClick={() => setOpen(false)}
            >
              <X width={16} height={16} />
            </Link>
          </Transition>
        </Dialog.Root>
      </div>
    </nav>
  );
}
