import { writable } from "svelte/store"

export const vita = "vita"
export const projects = "projects"
export const legal = "legal"

export const menuItems = [vita, projects, legal]
export let selectedMenuItem = writable(vita)
