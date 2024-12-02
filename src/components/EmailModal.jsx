import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { Checkmark } from 'react-checkmark'
import Button from './Button'
import ratEmailParams from '../utils/ratEmailParams'
import lasEmailParams from '../utils/lasEmailParams'

function EmailModal({ data, prompt, test, 'data-testid': testId }) {
  const { t } = useTranslation()
  const [userEmail, setUserEmail] = useState('')
  const [error, setError] = useState(null)
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const emailParams =
    test === 'RAT' ? ratEmailParams(data, userEmail) : test === 'LAS' ? lasEmailParams(data, userEmail) : null

  const emailTemplate = test === 'RAT' ? 'template_eyzajr9' : test === 'LAS' ? 'template_552vb9b' : null

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e) => {
    const email = e.target.value
    setUserEmail(email)
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
    } else {
      setError(null)
    }
  }

  const clearInput = () => {
    setUserEmail('')
    setError(null)
    setIsSent(false)
  }

  const sendEmail = () => {
    if (!validateEmail(userEmail)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSending(true)

    emailjs.send('service_zwdj6q5', emailTemplate, emailParams).then(
      (result) => {
        console.log('Email sent successfully:', result.text)
        setUserEmail('')
        setIsSending(false)
        setIsSent(true)
      },
      (error) => {
        console.error('Error sending email:', error.text)
        alert('Failed to send email. Please try again.')
        setIsSending(false)
      }
    )
  }

  return (
    <>
      <Button prompt={prompt} onClick={() => document.getElementById('my_modal_5').showModal()} data-testid={testId} />

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{t('resultpage.modal.heading')}</h3>
          <div className="modal-action">
            <form method="dialog" className={`flex flex-row items-center ${isSent ? 'justify-between w-full' : ''}`}>
              <div className="flex items-center">
                {!isSent ? (
                  <div className="md:flex-row flex-col">
                    <label className="md:mr-8">
                      <input
                        type="email"
                        placeholder="example@email.com"
                        value={userEmail}
                        onChange={handleEmailChange}
                        className="input"
                      />
                      {error && (
                        <p className="text-red-500 text-sm" data-testid="error">
                          {error}
                        </p>
                      )}
                    </label>
                    <button
                      className="btn btn-primary text-white mr-2 mt-2 md:mt-0"
                      onClick={sendEmail}
                      disabled={!validateEmail(userEmail) || isSending}
                    >
                      {t('resultpage.modal.send_button')}
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Checkmark size={'large'} />
                    <p className="md:ml-8 ml-2">{t('resultpage.modal.confirmation')}</p>
                  </div>
                )}
              </div>
              <button
                className="btn btn-error text-white ml-4 md:ml-0"
                onClick={clearInput}
                data-testid="modalDiscardButton"
              >
                {t('resultpage.modal.discard_button')}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default EmailModal
