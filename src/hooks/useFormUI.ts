'use client'

import {
  AutocompleteProps,
  CheckboxProps,
  InputProps,
  RadioProps,
  SelectProps,
  SwitchProps,
  TextFieldProps
} from '@mui/material'
import { ElementType, useEffect, useMemo, useRef, useState } from 'react'
import { FieldErrors, FieldValues, Path } from 'react-hook-form'

import { EFormUIState } from 'enums'

/* eslint-disable no-unused-vars */
type IFormItem<T extends object = object> = Record<EFormUIState, T>
/* eslint-enable no-unused-vars */

interface IProps<T extends FieldValues> {
  initialState?: EFormUIState
  focusOn?: Path<T>
  loadingDependency?: boolean
  errors?: FieldErrors<T>
}

/**
 * A custom hook to manage the state of a form UI.
 *
 * @param {EFormUIState} [initialState=EFormUIState.VIEW_ONLY] The initial state of the form UI.
 * @param focusOn The path of the form field to focus on when the form UI is in `EDITABLE` state.
 *
 * @returns An object containing the following properties:
 *   * `ref`: A reference to the form element.
 *   * `state`: The current state of the form UI.
 *   * `setState`: A function to set the state of the form UI.
 *   * `scrollToTop`: A function to scroll the main content area to the top.
 *   * `EState`: An enum of all possible form UI states.
 *   * `getPropsByState`: A function to get the form field props for the given state.
 *   * `textFieldProps`: The form field props for text fields.
 *   * `inputProps`: The form field props for input fields.
 *   * `switchProps`: The form field props for switch fields.
 */
function useFormUI<T extends FieldValues = FieldValues>({
  initialState = EFormUIState.VIEW_ONLY,
  ...props
}: IProps<T> = {}) {
  const [state, setState] = useState(initialState)
  const [stateAfterLoading, setStateAfterLoading] = useState<EFormUIState>()
  const [loading, setLoading] = useState(false)
  const [isForceLoading, setIsForceLoading] = useState(false)

  const ref = useRef<HTMLFormElement>()

  const formFieldProps = useMemo(() => {
    const inputProps: IFormItem<InputProps> = {
      [EFormUIState.VIEW_ONLY]: {
        readOnly: true,
        sx: {
          color: (theme) => theme.palette.text.secondary
        }
      },
      [EFormUIState.DISABLED]: {},
      [EFormUIState.LOADING]: {},
      [EFormUIState.EDITABLE]: {}
    }

    const textFieldProps: IFormItem<TextFieldProps> = {
      [EFormUIState.VIEW_ONLY]: {
        variant: 'standard',
        InputProps: inputProps[EFormUIState.VIEW_ONLY]
      },
      [EFormUIState.EDITABLE]: {
        variant: 'outlined',
        InputProps: inputProps[EFormUIState.EDITABLE]
      },
      [EFormUIState.DISABLED]: {
        variant: 'filled',
        disabled: true,
        InputProps: inputProps[EFormUIState.DISABLED]
      },
      [EFormUIState.LOADING]: {
        variant: 'filled',
        disabled: true,
        InputProps: inputProps[EFormUIState.LOADING]
      }
    }

    const selectProps: IFormItem<SelectProps> = {
      [EFormUIState.VIEW_ONLY]: {
        variant: 'standard',
        readOnly: true
      },
      [EFormUIState.EDITABLE]: {
        variant: 'outlined'
      },
      [EFormUIState.DISABLED]: {
        variant: 'filled',
        disabled: true
      },
      [EFormUIState.LOADING]: {
        variant: 'filled',
        disabled: true
      }
    }

    const switchProps: IFormItem<SwitchProps> = {
      [EFormUIState.VIEW_ONLY]: {
        disabled: true
      },
      [EFormUIState.DISABLED]: {
        disabled: true
      },
      [EFormUIState.LOADING]: {
        disabled: true
      },
      [EFormUIState.EDITABLE]: {}
    }

    const radioProps: IFormItem<RadioProps> = {
      [EFormUIState.VIEW_ONLY]: {
        disabled: true
      },
      [EFormUIState.DISABLED]: {
        disabled: true
      },
      [EFormUIState.LOADING]: {
        disabled: true
      },
      [EFormUIState.EDITABLE]: {}
    }

    const checkboxProps: IFormItem<CheckboxProps> = {
      [EFormUIState.VIEW_ONLY]: {
        disabled: true
      },
      [EFormUIState.DISABLED]: {
        disabled: true
      },
      [EFormUIState.LOADING]: {
        disabled: true
      },
      [EFormUIState.EDITABLE]: {}
    }

    const autocompleteProps: IFormItem<
      Omit<
        AutocompleteProps<any, boolean | undefined, boolean | undefined, boolean | undefined, ElementType<any>>,
        'renderInput' | 'options'
      >
    > &
      IFormItem<TextFieldProps> = {
      [EFormUIState.VIEW_ONLY]: {
        readOnly: true,
        variant: 'standard',
        InputProps: inputProps[EFormUIState.VIEW_ONLY]
      },
      [EFormUIState.DISABLED]: {},
      [EFormUIState.LOADING]: {},
      [EFormUIState.EDITABLE]: {}
    }

    return {
      textFieldProps,
      inputProps,
      switchProps,
      autocompleteProps,
      radioProps,
      selectProps,
      checkboxProps
    }
  }, [])

  useEffect(() => {
    focusFirstInvalidInput(props.errors)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.errors])

  useEffect(() => {
    if (props.loadingDependency || loading) {
      setState(EFormUIState.LOADING)
    } else {
      setState(stateAfterLoading || initialState)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.loadingDependency, loading])

  const getPropsByState = (stateParam: EFormUIState = initialState) => {
    return {
      textFieldProps: isForceLoading
        ? formFieldProps.textFieldProps[EFormUIState.LOADING]
        : formFieldProps.textFieldProps[stateParam],
      inputProps: isForceLoading
        ? formFieldProps.inputProps[EFormUIState.LOADING]
        : formFieldProps.inputProps[stateParam],
      switchProps: isForceLoading
        ? formFieldProps.switchProps[EFormUIState.LOADING]
        : formFieldProps.switchProps[stateParam],
      autocompleteProps: isForceLoading
        ? formFieldProps.autocompleteProps[EFormUIState.LOADING]
        : formFieldProps.autocompleteProps[stateParam],
      radioProps: isForceLoading
        ? formFieldProps.radioProps[EFormUIState.LOADING]
        : formFieldProps.radioProps[stateParam],
      selectProps: isForceLoading
        ? formFieldProps.selectProps[EFormUIState.LOADING]
        : formFieldProps.selectProps[stateParam],
      checkboxProps: isForceLoading
        ? formFieldProps.checkboxProps[EFormUIState.LOADING]
        : formFieldProps.checkboxProps[stateParam]
    }
  }

  const forceLoading = (status: boolean) => {
    setIsForceLoading(status)
  }

  const scrollToTop = () => {
    const mainEle = document.getElementById('main-content')
    if (mainEle) mainEle.scrollTo(0, 0)
  }

  const watchLoading = (loadingProps: boolean) => {
    setLoading(loadingProps)
  }

  const focusFirstInvalidInput = (errors?: FieldErrors<T>) => {
    if (!errors) return
    if (ref.current) {
      const errorKeys = Object.keys(errors)
      const elements = ref.current.elements
      if (errorKeys.length > 0) {
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i] as HTMLInputElement
          if (errorKeys.includes(element.name)) {
            element.focus()
            break
          }
          if (element.id === 'categoriesId' && errorKeys.includes(element.id)) {
            element.focus()
            break
          }
        }
      }
    }
  }

  return {
    ref,
    state,
    setState,
    scrollToTop,
    EState: EFormUIState,
    getPropsByState,
    setStateAfterLoading,
    watchLoading,
    focusFirstInvalidInput,
    forceLoading,
    ...getPropsByState(state)
  }
}

export default useFormUI
