import { Unit } from '../types/content';
import { demoUnit } from './demo';
import { unit01 } from './unit01';
import { unit02 } from './unit02';
import { unit03 } from './unit03';
import { unit04 } from './unit04';
import { unit05 } from './unit05';
import { unit06 } from './unit06';
import { unit07 } from './unit07';
import { unit08 } from './unit08';
import { unit09 } from './unit09';
import { unit10 } from './unit10';
import { unit11 } from './unit11';
import { unit12 } from './unit12';
import { unit13 } from './unit13';
import { unit14 } from './unit14';
import { unit15 } from './unit15';

/**
 * UNITS REGISTRY
 * To add or update a unit, simply create or edit its file and ensure it is listed in this array.
 */
export const UNITS_REGISTRY: Unit[] = [
  demoUnit, // 0 Demo (Testing & Visuals)
  unit01,
  unit02,
  unit03,
  unit04,
  unit05,
  unit06,
  unit07,
  unit08,
  unit09,
  unit10,
  unit11,
  unit12,
  unit13,
  unit14,
  unit15,
];

export const getUnitById = (id: string): Unit | undefined => {
  return UNITS_REGISTRY.find((u) => u.id === id);
};
