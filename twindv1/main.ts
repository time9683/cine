import { getSheet, TwindConfig, setup } from "@twind/core"

export default function hydrate(options: TwindConfig) {
  setup(options, getSheet());
}