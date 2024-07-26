import React from "react";
import { Sidebar } from "flowbite-react";
import { useTranslation } from "react-i18next";

export default function SidebarItem({ item }) {
  const { t, i18n } = useTranslation(["lang"]);
  return (
    <Sidebar.Item href={item.url} icon={item.iconSidebar} aria-label={item.label}>
      {t(item.description)}
    </Sidebar.Item>
  );
}
